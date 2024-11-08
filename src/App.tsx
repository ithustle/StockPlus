//import HomeScreen from './screens/home'

function App() {

	return (
		<ChakraProvider value={system}>
			<OcrHome />
		</ChakraProvider>
	)
}

export default App

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react"
import OcrHome from './screens/ocr'

export const system = createSystem(defaultConfig, {
	globalCss: {
		"html, body": {
			bg: "{colors.background}",
			color: "{colors.text}",
			scrollbar: 'hidden',
		},
	},
	theme: {
		tokens: {
			fonts: {
				body: { value: "poppins" },
			},

			colors: {
				momenu: { value: "#F29325", },
				background: { value: "#F3F3F3", },
				text: { value: "#222222", },
				sideBar: { value: "#333333" }
			},
		},
		semanticTokens: {
			colors: {
				danger: {}
			}
		}
	}
})

