import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from "@ionic/react";

import React, { useState } from "react";
import BiorhythmCard from "./components/BiorhythmCard";

import { useLocalStorage } from "./hooks";

function App() {
  const [birthDate, setBirthDate] = useLocalStorage("birthDate", "");
  const [targetDAte, setTargetDate] = useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Biorhythm Calculator Test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {birthDate && (
          <BiorhythmCard birthDate={birthDate} targetDAte={targetDAte} />
        )}
        <IonItem>
          <IonLabel position="fixed">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="D MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Target Date:</IonLabel>
          <IonDatetime
            displayFormat="D MMM YYYY"
            value={targetDAte}
            onIonChange={(event) => setTargetDate(event.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
