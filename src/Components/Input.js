import React from 'react'
import { useRef } from 'react';
import { useState, setState } from 'react';
import { useEffect } from 'react';

function Input() {

    const words = [
        'californication',
        'plataforma5',
        'black',
        'summer',
        'flea',
        'aeroplane',
        'peppers',
        'unlimited',
        'arcadium',
        'love',
        'getaway',
        'stadium',
        'quixoticelixer',
        'quarter',
        'snow',
        'dylan',
        'zephyr',
        'funky',
        'chili',
        'perruno',
        'perrete'
    ];

    let getRandomWord = () => {
        return words[Math.floor(Math.random() * words.length)]
    }

    const [time, setTime] = useState(10)
    const [score, setScore] = useState(0)
    const [randomWord, setRandomWord] = useState(getRandomWord())
    const [timerPaused, setTimerPaused] = useState(false)
    const [status, setStatus] = useState("Escribe la siguiente palabra para sumar puntaje:")
    const [disabledInput, setDisabledInput] = useState(false)
    const [timeInterval, setTimeInterval] = useState()

    let input = useRef("")

    let compareWords = () => {
        console.log(randomWord);
        console.log(input.current.value)

        if (randomWord === input.current.value) {
            input.current.value = ""
            setScore(score + 1)
            setRandomWord(getRandomWord())
        }
    }

    const statusRef = useRef()

    useEffect(() => {
        if (time <= 0) { setTimeInterval(setTime(0)); setDisabledInput(true); setStatus("Perdiste."); input.current.value = ""; statusRef.current.value = "false"; statusRef.current.className = "text-danger card-text fs-5" }
    }, [time])

    useEffect(() => {
        setTimeInterval(setInterval(() => {
            setTime(time - 1)
        }, 1000))
        console.log(statusRef.current.value)
    }, [time])

    return (

        <div>
            {/* { time >= 0 ? time : clearInterval(timeInterval) } */}
            <div class="card text-center m-auto w-75 bg-dark bg-opacity-75 text-white my-5 m-auto">
                <div class="card-header">
                    <i class="fa-solid fa-circle-info text-info my-3"></i> Consigue el mayor puntaje posible antes de que se acabe el tiempo.
                </div>

                <div class="card-body">
                    <h5 class="card-title fs-1 fw-bold">TYPER 3000</h5>
                    <p class="card-text fs-5" ref={statusRef}>{status}</p>
                    <p class="fw-bold text-info fs-4">{randomWord}</p>
                    <input disabled={disabledInput} type="text" class="form-control w-50 m-auto" placeholder="Palabra..." aria-label="Username" aria-describedby="addon-wrapping" ref={input} onChange={compareWords} />
                    <p class="my-2">Tiempo: {time}s</p>
                    <p class="text-warning">Puntaje: <span class="text-white">{score}</span></p>
                </div>
                <div class="card-footer text-body-secondary fst-italic">
                    <p class="text-white">Matias Diaconchuk</p>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br />

        </div>
    )
}

export default Input