import { createGlobalStyle, css, styled } from "styled-components"


const bevel = css`
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #202020;
  border-bottom: 2px solid #202020;
  box-shadow:
    inset 1px 1px #dfdfdf,
    inset -1px -1px #808080;
`

const inset = css`
  border-top: 2px solid #404040;
  border-left: 2px solid #404040;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  box-shadow:
    inset 1px 1px #808080,
    inset -1px -1px #dfdfdf;
`

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-width: 320px;
    background: #008080;
    color: #111;
    font-family: "MS Sans Serif", Tahoma, Geneva, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: none;
  }

  button, a {
    font: inherit;
  }

  a {
    color: inherit;
  }

  ::selection {
    color: white;
    background: #000080;
  }

  :focus-visible {
    outline: 1px dotted #111;
    outline-offset: -5px;
  }
`

export const Desktop = styled.main`
  min-height: 100vh;
  padding: 30px 22px 86px;
  background-color: #008080;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 4px 4px;

  @media (max-width: 600px) {
    padding: 14px 10px 78px;
  }
`


export const Page = styled.div`
	width: min(1120px, 100%);
	margin: 0 auto;
`

export const Window = styled.section`
	${bevel};
	scroll-margin-top: 20px;
	background: #c0c0c0;
	padding: 3px;
	margin-bottom: 28px;

	@media (max-width: 600px) {
		margin-bottom: 16px;
	}
`

export const TitleBar = styled.div`
	min-height: 29px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	padding: 3px 4px 3px 7px;
	color: #fff;
	background: linear-gradient(90deg, #000080 0%, #0a4da1 68%, #1084d0 100%);
`

export const Title = styled.h2`
	display: flex;
	align-items: center;
	gap: 7px;
	margin: 0;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: 0.01em;
`

export const AppIcon = styled.span`
	${bevel};
	width: 17px;
	height: 17px;
	display: inline-grid;
	place-items: center;
	flex: 0 0 auto;
	color: #000;
	background: #f1c40f;
	font-family: monospace;
	font-size: 10px;
	line-height: 1;
`

export const Controls = styled.div`
	display: flex;
	gap: 3px;
`

export const Control = styled.span`
	${bevel};
	width: 20px;
	height: 19px;
	display: grid;
	place-items: center;
	color: #111;
	background: #c0c0c0;
	font-family: Arial, sans-serif;
	font-size: 13px;
	font-weight: 700;
	line-height: 1;
`

export const WindowBody = styled.div`
	padding: clamp(22px, 5vw, 60px);
`

export const HeroBody = styled(WindowBody)`
	min-height: min(590px, calc(100vh - 128px));
	display: grid;
	align-content: center;
	background: #c0c0c0;
`

export const Eyebrow = styled.div`
	width: fit-content;
	margin-bottom: 24px;
	padding: 5px 8px;
	color: #fff;
	background: #000080;
	font-family: "Courier New", monospace;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.12em;
`

export const HeroHeading = styled.h1`
	max-width: 850px;
	margin: 0 0 28px;
	font-family: "Courier New", monospace;
	font-size: clamp(37px, 6.6vw, 78px);
	line-height: 0.98;
	letter-spacing: -0.065em;

	span {
		display: block;
		margin-top: 13px;
		color: #000080;
	}
`

export const HeroSubline = styled.p`
	max-width: 620px;
	margin: 0 0 32px;
	font-size: 16px;
	line-height: 1.55;
`

export const Button = styled.a`
	${bevel};
	width: fit-content;
	min-width: 116px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 9px;
	min-height: 38px;
	padding: 7px 17px;
	color: #111;
	background: #c0c0c0;
	font-weight: 700;
	text-align: center;
	text-decoration: none;
	cursor: pointer;

	&::first-letter {
		text-decoration: underline;
	}

	&:active {
		border-top-color: #202020;
		border-left-color: #202020;
		border-right-color: #fff;
		border-bottom-color: #fff;
		box-shadow:
			inset 1px 1px #808080,
			inset -1px -1px #dfdfdf;
		padding: 8px 16px 6px 18px;
	}
`

export const AboutGrid = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 1.35fr) minmax(240px, 0.65fr);
	gap: clamp(24px, 6vw, 78px);
	align-items: center;

	@media (max-width: 720px) {
		grid-template-columns: 1fr;
	}
`

export const SectionHeading = styled.h3`
	margin: 0 0 20px;
	font-family: "Courier New", monospace;
	font-size: clamp(27px, 4vw, 42px);
	line-height: 1;
	letter-spacing: -0.045em;
`

export const Copy = styled.p`
	max-width: 680px;
	margin: 0 0 16px;
	font-size: 16px;
	line-height: 1.65;
`

export const ProfilePanel = styled.div`
	${inset};
	min-height: 220px;
	padding: 22px;
	display: grid;
	place-items: center;
	background: #fff;
`

export const PixelPortrait = styled.div`
	width: 145px;
	height: 145px;
	position: relative;
	overflow: hidden;
	border: 8px solid #000080;
	background:
		linear-gradient(135deg, transparent 48%, #008080 49% 59%, transparent 60%),
		linear-gradient(#f4d6b2 0 0) 50% 43% / 58px 62px no-repeat,
		linear-gradient(#26211e 0 0) 50% 16% / 66px 25px no-repeat,
		linear-gradient(#4040a0 0 0) 50% 112% / 114px 74px no-repeat,
		#d9f3f3;
	image-rendering: pixelated;

	&::before,
	&::after {
		content: "";
		position: absolute;
		top: 64px;
		width: 9px;
		height: 7px;
		background: #111;
	}

	&::before {
		left: 43px;
	}

	&::after {
		right: 43px;
	}
`

export const ProjectsBody = styled(WindowBody)`
	padding-top: clamp(28px, 4vw, 46px);
`

export const SectionIntro = styled.div`
	display: flex;
	align-items: end;
	justify-content: space-between;
	gap: 30px;
	margin-bottom: 30px;

	p {
		max-width: 450px;
		margin: 0;
		line-height: 1.5;
	}

	@media (max-width: 680px) {
		display: block;

		p {
			margin-top: 12px;
		}
	}
`

export const ProjectGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 24px;

	@media (max-width: 760px) {
		grid-template-columns: 1fr;
	}
`

export const ProjectCard = styled.article`
	${bevel};
	min-width: 0;
	padding: 3px;
	background: #c0c0c0;
`
export const CardTitleBar = styled(TitleBar)`
	min-height: 27px;
	background: linear-gradient(90deg, #000080, #1084d0);
`

export const Screenshot = styled.div`
	${inset};
	height: 205px;
	position: relative;
	overflow: hidden;
	margin: 8px;
	padding: 28px 18px 15px;
	background: ${({ $palette }) => $palette[2]};

	&::before {
		content: "";
		position: absolute;
		inset: 0 0 auto;
		height: 19px;
		border-bottom: 2px solid #111;
		background:
			radial-gradient(circle, #ef5350 0 3px, transparent 4px) 8px 6px / 9px 9px no-repeat,
			radial-gradient(circle, #f2c94c 0 3px, transparent 4px) 20px 6px / 9px 9px no-repeat,
			radial-gradient(circle, #27ae60 0 3px, transparent 4px) 32px 6px / 9px 9px no-repeat,
			#dfdfdf;
	}
`

export const MockNav = styled.div`
	width: 100%;
	height: 13px;
	margin-bottom: 16px;
	background: #111;
	box-shadow: 0 4px 0 rgba(255, 255, 255, 0.8);
`

export const MockContent = styled.div`
	height: 128px;
	display: grid;
	grid-template-columns: 1.2fr 0.8fr;
	gap: 11px;

	div:first-child {
		border: 2px solid #111;
		background:
			linear-gradient(${({ $palette }) =>
				$palette[0]} 0 0) 12px 16px / 65% 13px no-repeat,
			linear-gradient(#111 0 0) 12px 41px / 80% 5px no-repeat,
			linear-gradient(#111 0 0) 12px 52px / 56% 5px no-repeat,
			linear-gradient(${({ $palette }) =>
				$palette[1]} 0 0) 12px 76px / 74px 25px no-repeat,
			#fff;
	}

	div:last-child {
		border: 2px solid #111;
		background:
			linear-gradient(135deg, ${({ $palette }) =>
				$palette[1]} 50%, transparent 51%),
			${({ $palette }) => $palette[0]};
	}
`

export const CardContent = styled.div`
	padding: 14px 13px 16px;

	h3 {
		margin: 0 0 9px;
		font-family: "Courier New", monospace;
		font-size: 21px;
	}

	p {
		min-height: 66px;
		margin: 0 0 14px;
		line-height: 1.5;
	}
`

export const Stack = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 7px;
	margin: 0 0 17px;
	padding: 0;
	list-style: none;

	li {
		${inset};
		padding: 4px 7px;
		background: #dfdfdf;
		font-family: "Courier New", monospace;
		font-size: 11px;
		font-weight: 700;
	}
`

export const CardActions = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 9px;

	${Button} {
		min-width: 105px;
		min-height: 33px;
		padding: 5px 12px;
		font-size: 12px;
	}
`

export const ContactBody = styled(WindowBody)`
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 30px;
	align-items: center;

	${Copy} {
		margin-bottom: 0;
	}

	@media (max-width: 650px) {
		grid-template-columns: 1fr;
		gap: 16px;
	}
`

export const StatusBar = styled.div`
	${inset};
	display: flex;
	justify-content: space-between;
	gap: 12px;
	margin-top: 3px;
	padding: 5px 8px;
	font-size: 11px;

	@media (max-width: 500px) {
		span:last-child {
			display: none;
		}
	}
`

export const Taskbar = styled.footer`
	${bevel};
	position: fixed;
	z-index: 10;
	left: 0;
	right: 0;
	bottom: 0;
	min-height: 48px;
	display: flex;
	align-items: center;
	gap: 7px;
	padding: 5px 8px;
	background: #c0c0c0;
`

export const StartButton = styled.div`
	${bevel};
	height: 36px;
	display: flex;
	align-items: center;
	gap: 7px;
	padding: 0 10px;
	font-weight: 700;

	span {
		width: 18px;
		height: 18px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;

		i {
			display: block;
			background: #000080;
		}
	}
`

export const TaskLinks = styled.nav`
	display: flex;
	gap: 6px;
	min-width: 0;

	a {
		${bevel};
		min-width: 102px;
		height: 34px;
		display: grid;
		place-items: center;
		padding: 0 12px;
		background: #c0c0c0;
		font-size: 12px;
		font-weight: 700;
		text-decoration: none;
	}

	@media (max-width: 500px) {
		a {
			min-width: 70px;
			padding: 0 8px;
		}
	}
`

export const Clock = styled.div`
  ${inset};
  height: 34px;
  display: grid;
  place-items: center;
  margin-left: auto;
  padding: 0 12px;
  white-space: nowrap;
  font-size: 12px;

  @media (max-width: 650px) {
    display: none;
  }
`