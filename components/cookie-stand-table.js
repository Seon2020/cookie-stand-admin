import { hours } from '../data'
import emoji from 'react-easy-emoji'

export default function CookieStandTable({ stands, onDelete }) {
      
    return (
        <Table>
            <thead>
                <tr className="bg-green-400">
                    <TH>Location</TH>
                    {hours.map(slot => (
                        <TH key={slot}>{slot}</TH>
                    ))}
                    <TH>Totals</TH>
                </tr>
            </thead>
            <tbody>
                {stands.map((stand, i) => {
                    return (
                        <tr className="text-right border-2 border-green-500 even:bg-green-300 odd:bg-green-200" key={stand.id}>
                            <TH>
                                <div>
                                    <p className="float-left pl-3">{stand.location}</p>
                                    <img src="/red-trash.png" className="float-right pr-2 mt-0.5" onClick={() => onDelete(stand)} width="25" height="25"/>
                                </div>
                            </TH>
                            {stand.cookiesEachHour.map((amt, i) => (
                                <TD key={i}>
                                    {amt}
                                </TD>
                            ))}
                            <TD>{stand.totalDailyCookies}</TD>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr className="bg-green-400 text-right">
                    <TH>Totals</TH>
                    {hours.map((_, i) => {
                        const amt = stands.reduce((acc, cur) => acc + cur.cookiesEachHour[i], 0);
                        return <TD key={'amt' + i}>{amt}</TD>
                    })}
                    <TD>{stands.reduce((acc, cur) => acc + cur.totalDailyCookies, 0)}</TD>
                </tr>
            </tfoot>
        </Table>

    );
}

function Table({ children }) {
    return (
        <table className="w-full border-green-500 m-6 mx-auto text-sm border-2">
            {children}
        </table>
    );
}

function TH({ children }) {
    return (
        <th className="border-green-500 p-2 text-left border-2">{children}</th>
    )
}

function TD({ children }) {
    return (
        <td className="border-green-500 p-2 border-2">{children}</td>
    )
}