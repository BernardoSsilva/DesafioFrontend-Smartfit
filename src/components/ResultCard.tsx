import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";

export default function ResultCard(props: { item: { id: boolean | Key | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; fountain: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; locker_room: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; mask: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; opened: any; schedules: any[]; towel: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; }) {

    function renderHTML(htmlContent:any){
        return { __html: htmlContent };
    }

    return (
        <div>
            <div className="resultCard" key={props.item.id}>
                <p>{props.item.opened ? 'Aberto' : 'Fechado'}</p>
                <h2>{props.item.title}</h2>
                <div className="conteudoTxt" id="conteudoTxt"></div>
                
                <div className="conteudoTxt" dangerouslySetInnerHTML={renderHTML(props.item.content)}></div>
                <p>Fountain: {props.item.fountain}</p>
                <p>Locker Room: {props.item.locker_room}</p>
                <p>Mask: {props.item.mask}</p>
                
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
                < p > Towel: {props.item.towel}</p>
            </div>

        </div >
    )
}