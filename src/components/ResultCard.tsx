import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
import requiredmask from "../assets/requiredmask.png"
import recommendedmask from "../assets/recommendedmask.png"
import requiredtowel from "../assets/requiredtowel.png"
import recommendedtowel from "../assets/recommendedtowel.png"
import forbiddenfountain from "../assets/forbiddenfountain.png"
import partialfountain from "../assets/partialfountain.png"
import forbiddenlockerroom from "../assets/forbiddenlockerroom.png"
import partiallockerroom from "../assets/partiallockerroom.png"
import requiredlockerroom from "../assets/requiredlockerroom.png"

export default function ResultCard(props: { item: { id: boolean | Key | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; fountain: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; locker_room: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; mask: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; opened: any; schedules: any[]; towel: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; }) {

    function renderHTML(htmlContent: any) {
        return { __html: htmlContent };
    }

    return (
        <div>
            <div className="resultCard" key={String(props.item.id)}>
                {props.item.opened ? (
                    <p className="aberto"><strong>Aberto</strong></p>
                ) : (
                    <p className="fechado"><strong>Fechado</strong></p>
                )}
                <h2>{props.item.title}</h2>
                <div className="conteudoTxt" dangerouslySetInnerHTML={renderHTML(props.item.content)}></div>
                <hr />
                <div className="resultCardImages">
                    <div className="resultCardCell">
                        {props.item.mask === "required" ? (
                            <img src={requiredmask} alt="" />
                        ) : (
                            props.item.mask === "recommended" ? (
                                <img src={recommendedmask} alt="" />
                            ) : (
                                <p></p>
                            )
                        )}
                    </div>

                    <div className="resultCardCell">
                        {props.item.towel === "required" ? (
                            <img src={requiredtowel} alt="" />
                        ) : (
                            props.item.towel === "recommended" ? (
                                <img src={recommendedtowel} alt="" />
                            ) : (
                                <p></p>
                            )
                        )}
                    </div>


                    <div className="resultCardCell">
                        {props.item.fountain === "not_allowed" ? (
                            <img src={forbiddenfountain} alt="" />
                        ) : (
                            props.item.fountain === "partial" ? (
                                <img src={partialfountain} alt="" />
                            ) : (
                                <p></p>
                            )
                        )}
                    </div>

                    <div className="resultCardCell">
                        {props.item.locker_room === "allowed" ? (
                            <img src={requiredlockerroom} alt="" />
                        ) : (
                            props.item.locker_room === "partial" ? (
                                <img src={partiallockerroom} alt="" />
                            ) : (
                                props.item.locker_room === "closed" ? (
                                    <img src={forbiddenlockerroom} alt="" />
                                ) : (
                                    <p></p>
                                )
                            )
                        )
                        }
                    </div>


                </div>

                {props.item.schedules && (
                    <div className="schedules">
                        <div className="schedulesItem">
                            <h3>{props.item.schedules[0].weekdays}</h3>
                            <p>{props.item.schedules[0].hour}</p>
                        </div>

                        <div className="schedulesItem">
                            <h3>{props.item.schedules[1].weekdays}</h3>
                            <p>{props.item.schedules[1].hour}</p>
                        </div>

                        <div className="schedulesItem">
                            <h3>{props.item.schedules[2].weekdays}</h3>
                            <p>{props.item.schedules[2].hour}</p>
                        </div>


                    </div>
                )
                }

            </div>

        </div >
    )
}