import { useState } from "react";
import GoalButtons from "@/components/organisms/GoalButtons";
import BasicButton from "@/components/atoms/buttons/BasicButton";

const Goal = () => {
	// 목표 설정
	const [goal, setGoal] = useState("");
	function handleGoal(goal: string) {
		setGoal(goal);
	}
	return (
		<div className="grid justify-items-center mt-20">
			<h1 className="mb-14">목표설정</h1>
			<div className="mb-6">
				<GoalButtons handleGoal={handleGoal} />
			</div>
			<div className="w-96 grid gap-3">
				<BasicButton type="button" onClick={() => {}} width={true} style="primary">
					회원가입 완료
				</BasicButton>
				<BasicButton type="button" onClick={() => {}} width={true} style="bg">
					이전 단계
				</BasicButton>
			</div>
		</div>
	);
};

export default Goal;
