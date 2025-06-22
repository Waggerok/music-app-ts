import { Button } from "@/shared"
import { BookHeadphones, Facebook, Twitter, Youtube } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-black text-neutral-content p-6">
            <aside>
                <BookHeadphones size={50}/>
                <p>
                My music service ltd.
                <br />
                Copyright © 2025 - All right reserved
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    
                    <Button>
                        <a href="http://twitter.com/">
                            <Twitter/>
                        </a>  
                    </Button>
                    
                    <Button>
                        <a href="https://www.youtube.com/">
                            <Youtube/>
                        </a>
                    </Button>
                    <Button>
                        <a href="https://www.facebook.com/">
                            <Facebook/>
                        </a>
                    </Button>
                </div>
            </nav>
        </footer>
    )
}