import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Action, Avatar, Field, FormShell, GlassCard, initialsOf, PageHead, Pill, TextArea, TextInput } from "@/components/kit";

export const Route = createFileRoute("/dasbor/mempelai")({
  head: () => ({
    meta: [
      { title: "Data Mempelai — Aksara Cinta" },
      { name: "description", content: "Atur nama, orang tua, dan biografi kedua mempelai pada undangan." },
      { property: "og:title", content: "Data Mempelai — Aksara Cinta" },
      { property: "og:description", content: "Atur nama, orang tua, dan biografi kedua mempelai pada undangan." },
    ],
  }),
  component: CouplePage,
});

function CouplePage() {
  const [saved, setSaved] = useState(false);
  const [groom, setGroom] = useState({ name: "Reza Pratama", nick: "Reza", parents: "Putra dari Bpk. Hartono & Ibu Lestari", bio: "Anak pertama dari dua bersaudara." });
  const [bride, setBride] = useState({ name: "Nadia Safira", nick: "Nadia", parents: "Putri dari Bpk. Wijaya & Ibu Sari", bio: "Anak bungsu dari tiga bersaudara." });

  return (
    <>
      <PageHead title="Mempelai" subtitle="Identitas pasangan">
        {saved ? <Pill tone="success">Tersimpan</Pill> : null}
      </PageHead>

      <div className="mb-4 grid gap-3 sm:grid-cols-2">
        {[groom, bride].map((person, index) => (
          <GlassCard key={person.name} className="flex items-center gap-3 p-4">
            <Avatar text={initialsOf(person.name)} tone={index === 0 ? "matcha" : "gold"} />
            <div>
              <p className="font-display text-lg font-bold">{person.nick}</p>
              <p className="text-xs text-helper">{index === 0 ? "Mempelai Pria" : "Mempelai Wanita"}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      <FormShell actions={<Action tone="gold" onClick={() => setSaved(true)}>Simpan</Action>}>
        <Field label="Nama Pria">
          <TextInput placeholder="Nama" value={groom.name} onChange={(event) => setGroom({ ...groom, name: event.target.value })} />
        </Field>
        <Field label="Nama Wanita">
          <TextInput placeholder="Nama" value={bride.name} onChange={(event) => setBride({ ...bride, name: event.target.value })} />
        </Field>
        <Field label="Panggilan Pria">
          <TextInput placeholder="Panggilan" value={groom.nick} onChange={(event) => setGroom({ ...groom, nick: event.target.value })} />
        </Field>
        <Field label="Panggilan Wanita">
          <TextInput placeholder="Panggilan" value={bride.nick} onChange={(event) => setBride({ ...bride, nick: event.target.value })} />
        </Field>
        <Field label="Orang Tua Pria">
          <TextInput placeholder="Orang tua" value={groom.parents} onChange={(event) => setGroom({ ...groom, parents: event.target.value })} />
        </Field>
        <Field label="Orang Tua Wanita">
          <TextInput placeholder="Orang tua" value={bride.parents} onChange={(event) => setBride({ ...bride, parents: event.target.value })} />
        </Field>
        <Field label="Bio Pria">
          <TextArea placeholder="Bio" value={groom.bio} onChange={(event) => setGroom({ ...groom, bio: event.target.value })} />
        </Field>
        <Field label="Bio Wanita">
          <TextArea placeholder="Bio" value={bride.bio} onChange={(event) => setBride({ ...bride, bio: event.target.value })} />
        </Field>
      </FormShell>
    </>
  );
}
