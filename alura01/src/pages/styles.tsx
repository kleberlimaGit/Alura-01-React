import { styled } from "../styles";

export const HomeContainer = styled('div', {
    minWidth: 1024,
    minHeight: 600,
    backgroundColor: '$orange600',
    alignItems:"center",
    justifyContent:"center",
    margin: '0 auto'
})

export const NotFoundContainer = styled('div', {
    width: '100vw',
    height: '100vh',
    display:'flex',
    flexDirection:'column',
    alignItems:"center",
    justifyContent:"center"
})

export const NotFoundContent = styled('div', {
    display: 'flex',
    alignItems:"center",
    justifyContent:"center",
    gap: '1rem',

    div: {
        fontSize:30
    }
})