import { useCallback, useState } from "react";

export const useInputArray = () => {
	const [text, setText] = useState("");
	const [array, setArray] = useState([]);

	const handleChange = useCallback((e) => {
		if (e.target.value.length > 5) {
			alert("5文字以内にしてください");
			return;
		}
		setText(e.target.value.trim());
	}, []);

	const handleAdd = useCallback(() => {
		setArray((prevArray) => {
			if (prevArray.includes(text)) {
				alert("同じ要素がすでに存在します");
			}
			const newArray = [...prevArray, text];
			return newArray;
		});
	}, [text]);

	return { text, array, handleChange, handleAdd };
};
