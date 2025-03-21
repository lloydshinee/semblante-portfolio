import { Hapi } from "../(pages)/Hapi";
import { Kry } from "../(pages)/Kry";
import { MotmotPage } from "../(pages)/Motmot";
import { Skerd } from "../(pages)/Skerd";
import { MeGone } from "../(pages)/MeGone";
import { Angy } from "../(pages)/Angy";

export default function WhatPage({ params }: { params: { what: string } }) {
  switch (params.what) {
    case "motmot":
      return <MotmotPage />;
    case "skerd":
      return <Skerd />;
    case "hapi":
      return <Hapi />;
    case "kry":
      return <Kry />;
    case "megone":
      return <MeGone />;
    case "angy":
      return <Angy />;
    default:
      return <div>404</div>;
  }
}
