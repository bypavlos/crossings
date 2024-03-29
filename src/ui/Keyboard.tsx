import { View, Pressable } from "react-native"
import { Text } from "@/design-system/Text"

export const BACKSPACE = "⌫"

interface KeyboardProps {
	onKeyPress: (key: string) => void
}

export function Keyboard({ onKeyPress }: KeyboardProps) {
	return (
		<View className="h-[180px] w-full justify-around">
			<View className="flex-row justify-center gap-[4px] px-4">
				{["Ε", "Ρ", "Τ", "Υ", "Θ", "Ι", "Ο", "Π"].map((c) => (
					<Key key={c} character={c} onPress={() => onKeyPress(c)} />
				))}
			</View>
			<View className="flex-row justify-center gap-[4px] px-4">
				{["Α", "Σ", "Δ", "Φ", "Γ", "Η", "Ξ", "Κ", "Λ"].map((c) => (
					<Key key={c} character={c} onPress={() => onKeyPress(c)} />
				))}
			</View>
			<View className="flex-row justify-center gap-[4px] px-4 pr-0">
				{["Ζ", "Χ", "Ψ", "Ω", "Β", "Ν", "Μ"].map((c) => (
					<Key key={c} character={c} onPress={() => onKeyPress(c)} />
				))}
				<View className="ml-2">
					<Key character={BACKSPACE} width="1.5u" onPress={() => onKeyPress(BACKSPACE)} />
				</View>
			</View>
		</View>
	)
}

interface KeyProps {
	character: string
	width?: "1u" | "1.5u"
	onPress: () => void
}

function Key({ character, width = "1u", onPress }: KeyProps) {
	const w = width === "1u" ? "w-[35px]" : "w-[50px]"
	return (
		<Pressable onPress={onPress}>
			<View
				className={`${w} h-[45px] items-center justify-center rounded border border-on-background`}
			>
				<Text className="text-2xl">{character.toUpperCase()}</Text>
			</View>
		</Pressable>
	)
}
