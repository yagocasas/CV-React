import { useState } from 'react';

const [showAbout, setShowAbout] = useState(true);

<button onClick={() => setShowAbout(!showAbout)}></button>
{showAbout ? <div>Mostrar</div> : <div>No Mostrar</div>}