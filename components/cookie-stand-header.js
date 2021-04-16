import Link from 'next/link'

export default function CookieStandHeader({ username, onLogout }) {
    return (
        <header className="flex justify-around p-4 mb-6 text-3xl bg-green-400">
            <h1 className="font-bold text-black"> Cookie Stand Admin </h1>
            <div className="flex items-center gap-2">
                <p className="text-sm py-1 px-3 bg-green-200 rounded-md">{username}</p>
                <Link href="/">
                    <button className="px-3 py-1 text-sm pd-y text-gray-50 bg-green-600 rounded-md">
                        { username && <a onClick={onLogout} >Sign Out</a> }
                    </button>
                </Link>
                <Link href="/overview">
                    <button className="px-1.5 py-0.5 text-sm rounded bg-green-50">
                        <a>Overview</a>
                    </button>
                </Link>
            </div>
        </header>
    )
}
