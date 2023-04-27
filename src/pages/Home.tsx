import Input from "@/components/atoms/Input";
import ValidationInput from "@/components/atoms/ValidationInput";
import InputWithLabel from "@/components/molecules/InputWithLabel";
import React from "react";

const Home = () => {
	return (
		<div>
			<div>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam consequuntur laborum culpa non a aspernatur
				omnis possimus error accusamus illum illo soluta eius officiis recusandae, ipsum quaerat accusantium sapiente
				explicabo.
				<button className="btn text-system-error bg-system-success">Button</button>
				<button className="btn btn-primary text-system-error bg-system-success">Button</button>
				<button className="btn btn-primary gray-1">Button</button>
				<button className="btn btn-secondary">Button</button>
				<button className="btn btn-accent">Button</button>
				<button className="btn btn-ghost">Button</button>
				<button className="btn btn-link">Button</button>
			</div>

			<div className="card shadow bg-bg-1">
				<div className="card-body">
					<h2 className="card-title">no border with shadow</h2>
					<p>Rerum reiciendis beatae tenetur excepturi</p>
				</div>
			</div>
			<div className="card shadow-lg">
				<div className="card-body">
					<h2 className="card-title">no border with shadow</h2>
					<p>Rerum reiciendis beatae tenetur excepturi</p>
				</div>
			</div>

			<p>basic input</p>
			<Input type="text" name="test" id="1" value="" placeholder="test" onChange={() => {}} />
			<br />
			<br />
			<p>validation input</p>
			<ValidationInput
				type="text"
				name="test"
				id="1"
				value="test"
				placeholder="test"
				isError={false}
				errorMessage="message test"
				onChange={() => {}}
			/>
			<br />
			<br />
			<p>validation input + label</p>
			<InputWithLabel
				type="text"
				name="test"
				id="1"
				value="test"
				placeholder="test"
				isError={false}
				errorMessage="message test"
				onChange={() => {}}
				label="label test"
				htmlFor="test"
			/>
		</div>
	);
};

export default Home;