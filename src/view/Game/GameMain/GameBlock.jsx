import React from 'react'
import GameSituation from './GameSituation/GameSituation'
import GameShort from './GameShort/GameShort'
import GameChoice from './GameChoice/GameChoice'

export default function GameBlock({ data, setCurrentQIndex, roundKey, setTotal, setScores }) {
    if(data.type == "situation")
		return <GameSituation
			data={data}
			setCurrentQIndex={setCurrentQIndex}
			roundKey={roundKey}
			setTotal={setTotal}
			setScores={setScores}
		/>
	if(data.type == "short")
		return <GameShort
			data={data}
			setCurrentQIndex={setCurrentQIndex}
			roundKey={roundKey}
			setTotal={setTotal}
			setScores={setScores}
		/>
	return <GameChoice
		data={data}
		setCurrentQIndex={setCurrentQIndex}
		roundKey={roundKey}
		setTotal={setTotal}
		setScores={setScores}
	/>
		
}
