import React from "react"
import * as S from "./Footer.styles"

export default () => {
    return (
        <S.Footer>
            <S.Element>
           <h3>OUR ADDRESS</h3>
           <p>Garden House School <br/>
            Turks Row, Chelsea, London, SW3 4TW <br/>
            © Garden House School 2020 <br/>
           </p>
           </S.Element>
           <S.Element>
           <h3>TELEPHONE NUMBERS</h3>
           <p>Girls' School Office +44 (0)20 7730 1652 <br/>
             Boys' School Office +44 (0)20 7730 6652</p><br/>
            </S.Element>
            <S.Element>
           <h3>HELPFUL LINKS</h3>
           <S.Link href="https://www.gardenhouseschool.co.uk/" target="_blank" rel="noopener noreferrer">GHS School Website</S.Link><br/>
           <S.Link href="https://www.gardenhouseschool.co.uk/parents-portal/music-tuition" target="_blank" rel="noopener noreferrer">Music Lessons Sign-Up</S.Link><br/>
            <br/><br/>
           </S.Element>
        </S.Footer>
    )
}



