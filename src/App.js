import {useSync} from "./sync/useSync"
import {useState} from "react"

const Cells = (props = {}) => {
	const cells = props.cells
	const [value, setValue] = useSync(cells.name)

	const onChange = (e) => {
		setValue(e.target.value) // should probably debounce keystrokes if there are 100s of cells
	}

	if (cells.length)
		return (
			<div>
				{cells.map((n, k) => {
					return <Cells key={k} cells={n}></Cells>
				})}
			</div>
		)

	if (!cells.name) return null

	return (
		<fieldset style={{margin: "20px", display: "inline-block"}}>
			<label>
				{cells.name} &nbsp;
				<input type="text" value={value} onChange={onChange}></input>
			</label>
			{cells.children && <Cells cells={cells.children} />}
		</fieldset>
	)
}

function App() {
	const [cells, setCells] = useState([
		{
			name: "A",
			children: [
				{name: "one", children: []},
				{name: "two", children: []},
			],
		},
		{
			name: "B",
			children: [
				{name: "one", children: []},
				{name: "two", children: []},
			],
		},
	])

	const onMore = () => {
		setCells([...cells, ...cells])
	}

	return (
		<div style={{padding: "20px", margin: "20px"}}>
			<h2>
				This demonstrates useSync across multiple text inputs (A, B, one
				and two) in multiple React components without Redux or Context
			</h2>
			<div>
				Type something in each box, any box, and the matching inputs
				will be synchronized
			</div>
			<Cells cells={cells} initial="change me" />
			<button onClick={onMore}>more</button>
			{cells.length > 2 && (
				<div> {cells.length * 3} synchronized inputs </div>
			)}
		</div>
	)
}

export default App
