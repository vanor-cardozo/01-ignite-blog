import React from "react"

import styles from './Comment.module.css'

import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from "./Avatar"

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyZmlsJTIwcGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=300&q=40"
            />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Devon Lane</strong>
                            <time title="26 de setembro às 15:35" dateTime="2022-09-26 15:35:00">
                                cerca de 1h atrás
                            </time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Vanor, parabéns!!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}