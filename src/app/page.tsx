import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
    return (
        <>
            <Header />
            <section>
                <div className="flex flex-col justify-center gap-5 m-5">
                    <Content title={"ezBOT (BOT Whatsapp)"}>
                        <section className="flex flex-col gap-1">
                            <div>Feature?</div>
                            <div className="p-1 border rounded-md shadow-inner bg-color-md shadow-color-xl border-color-xl">
                                <p>Group:</p>
                                <div className="ml-2 text-sm">
                                    <div>
                                        - Change the Group's (Icon, Name,
                                        Description)
                                    </div>
                                    <div>- Group Setting (Close, Open)</div>
                                    <div>
                                        - Mention Member when (Join/Leave)
                                    </div>
                                </div>
                            </div>
                            <div className="p-1 rounded-md bg-color-md">
                                test
                            </div>
                        </section>
                    </Content>
                </div>
            </section>
            <Footer />
        </>
    );
}
