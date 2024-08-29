import Link from "next/link";

export function Header() {
    return (
        <div>
            <h1>Orders</h1>
            <nav>
                    <Link href={"/"}>My Orders</Link>
                    <Link href={"/modify"}>Add / Edit Order</Link>
            </nav>
        </div>
    );
}