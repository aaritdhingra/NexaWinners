import React, { useEffect, useState } from "react"; import "../styles/Admin.css";
export default function Admin() {
  const [list, setList] = useState([]); const [form, setForm] = useState({ rank: 1, teamName: "", bounty: "", members: "" });
  const load = () => fetch("/api/winners").then(r=>r.json()).then(setList);
  useEffect(() => { load(); }, []);
  const submit = async (e) => {
    e.preventDefault();
    const payload = { ...form, rank: Number(form.rank), members: form.members.split("\n").map(s=>s.trim()).filter(Boolean) };
    await fetch("/api/winners", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(payload) });
    setForm({ rank: 1, teamName: "", bounty: "", members: "" }); load();
  };
  const del = async (id) => { await fetch(`/api/winners/${id}`, { method: "DELETE" }); load(); };
  return (
    <div className="admin">
      <h1 className="font-pirata">Admin Panel</h1>
      <form onSubmit={submit} className="admin-form">
        <input placeholder="Rank" type="number" value={form.rank} onChange={e=>setForm({...form, rank:e.target.value})} required/>
        <input placeholder="Team Name" value={form.teamName} onChange={e=>setForm({...form, teamName:e.target.value})} required/>
        <input placeholder="Bounty" value={form.bounty} onChange={e=>setForm({...form, bounty:e.target.value})}/>
        <textarea placeholder="Members (one per line)" rows="4" value={form.members} onChange={e=>setForm({...form, members:e.target.value})}/>
        <button type="submit">Add Winner</button>
      </form>
      <table className="admin-table">
        <tbody>{list.map(w=><tr key={w.id}><td>{w.rank}</td><td>{w.teamName}</td><td><button onClick={()=>del(w.id)}>Delete</button></td></tr>)}</tbody>
      </table>
    </div>
  );
}
