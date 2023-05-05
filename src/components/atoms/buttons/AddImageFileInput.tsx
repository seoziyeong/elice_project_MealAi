import AddIcon from "@/assets/icon_add_image.svg";
import { ChangeEvent } from "react";

interface AddImageFileInputProps {
	imageUrl: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// TODO : 업로드한 이미지 보이게 처리
const AddImageFileInput = ({ imageUrl, onChange }: AddImageFileInputProps) => {
	const handleClick = () => {
		const inputFileEl = document.querySelector("#upload") as HTMLInputElement;
		if (inputFileEl) inputFileEl.click();
	};
	return (
		<div className="w-96 h-96 relative overflow-hidden">
			<input
				type="file"
				id="upload"
				onChange={onChange}
				accept="image/*"
				className="w-96 h-96 absolute cursor-pointer hidden"
			/>
			<div
				className="w-96 h-96 bg-white border border-solid border-primary-2 rounded-lg flex justify-center items-center cursor-pointer"
				onClick={handleClick}
			>
				{imageUrl && (
					<img
						src={imageUrl}
						className="absolute w-96 h-96 object-cover border border-solid border-primary-2 rounded-lg "
					/>
				)}
				<div className="flex flex-col gap-6">
					<div className="flex justify-center">
						<img src={AddIcon} />
					</div>
					<p className="text-sm text-gray-6">식단 사진을 업로드 해주세요.</p>
				</div>
			</div>
		</div>
	);
};

export default AddImageFileInput;