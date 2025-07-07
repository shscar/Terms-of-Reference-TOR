// src/pages/Login.tsx
import { useState } from "react"
import axios from "axios"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

import LandingPage from "./pages/LandingPage"


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8000/api/login", {
                email,
                password,
            })
            localStorage.setItem("token", res.data.token)
            navigate("/dashboard")
        } catch {
            setError("Login gagal.")
        }
    }

    return (
        <Card className="max-w-md mx-auto mt-20 p-6">
            <CardContent>
                <h2 className="text-xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        required
                    />
                    <Input
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        required
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
