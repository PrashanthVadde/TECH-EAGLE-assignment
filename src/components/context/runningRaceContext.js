import React from "react" 

const RunningRaceContext = React.createContext({
    runnersData: [],
    onUpdateRunnersData: () => {},
    onAddRunner: () => {},
    onDeleteRunner: () => {}
})

export default RunningRaceContext