import Service from "./Service";


const Services = ({ data }) => {
    return (
        <div>
           <h4 className="text-center text-4xl text-[#FFBB00] rounded-xl font-bold my-6 bg-slate-400 border border-[#FF6F33] py-6">Our Services</h4>



            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    data.map(service => <Service key={service.id} service={service} ></Service>)
                }
            </div>
        </div>

    );
};

export default Services;