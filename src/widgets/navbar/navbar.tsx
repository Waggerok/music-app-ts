import { HomeIcon, LucideMusic4, MessageCircle, User } from 'lucide-react'
import styles from './navbar.module.scss'
import { Button } from '@/shared/ui/button/button'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className={`${styles.navbar} bg-gray-600 border-gray-600 w-full`}>
            <Button onClick={() => navigate('/')}>
                <HomeIcon/>
            </Button>
            <Button onClick={() => navigate('/tracks')}>
                <LucideMusic4/>
            </Button>
            <Button onClick={() => navigate('/profile')}>
                <User/>
            </Button>
            <Button onClick={() => navigate('/feedback')}>
                <MessageCircle/>
            </Button>
        </div>
    )
}