import React from 'react'

const GameBoard = () => {

    const theDiv = document.getElementsByClassName('divo')

    const theFun = () => {

        let i = 0
        for (i = 0; i < theDiv.length; i++) {
            let thenumber = Math.floor(Math.random() * 50) + 1
            theDiv[i].style.order = thenumber
            console.log(thenumber)
        }
    }

        return (
            <div className="container">
                <div onClick={theFun} className='divo'>1</div>
                <div onClick={theFun} className='divo'>2</div>
                <div onClick={theFun} className='divo'>3</div>
                <div onClick={theFun} className='divo'>4</div>

                <div onClick={theFun} className='divo'>5</div>
                <div onClick={theFun} className='divo'>6</div>
                <div onClick={theFun} className='divo'>7</div>
                <div onClick={theFun} className='divo'>8</div>

                <div onClick={theFun} className='divo'>9</div>
                <div onClick={theFun} className='divo'>10</div>
                <div onClick={theFun} className='divo'>11</div>
                <div onClick={theFun} className='divo'>12</div>

                <div onClick={theFun} className='divo'>13</div>
                <div onClick={theFun} className='divo'>14</div>
                <div onClick={theFun} className='divo'>15</div>
                <div onClick={theFun} className='divo'>16</div>
            </div>
        )
      };


export default GameBoard