import React from 'react'
import GameSituation from './GameSituation/GameSituation'
import GameShort from './GameShort/GameShort'
import GameChoice from './GameChoice/GameChoice'

export default function GameBlock({ data, setCurrentQIndex, roundKey }) {
    if(data.type == "situation")
		return <GameSituation
			data={data}
			setCurrentQIndex={setCurrentQIndex}
			roundKey={roundKey}
		/>
	if(data.type == "short")
		return <GameShort
			data={data}
			setCurrentQIndex={setCurrentQIndex}
			roundKey={roundKey}
		/>
	return <GameChoice
		data={data}
		setCurrentQIndex={setCurrentQIndex}
		roundKey={roundKey}
	/>
		
}
