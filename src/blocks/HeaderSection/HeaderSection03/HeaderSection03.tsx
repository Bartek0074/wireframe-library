import { Breadcrumb } from "@/components/atoms/Breadcrumb/Breadcrumb";

const items = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
]

const HeaderSection03 = () => {
    return (
        <section className="px-4">
            <div className="flex flex-col max-w-7xl py-16 mx-auto">
                <div className="flex flex-col max-w-3xl">
                    <Breadcrumb items={items} />
                    <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance text-primary sm:text-7xl">
                        About the company
                    </h1>
                    <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                        cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
                    </p>
                </div>
            </div>
        </section>
    );
};

export { HeaderSection03 };
