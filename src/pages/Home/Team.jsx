

const Team = () => {
    return (
        <div>
            <h4 className="text-center text-4xl text-[#FFBB00] rounded-xl font-bold my-6 bg-slate-400 border border-[#FF6F33] py-6">Our Team Member</h4>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
                <div className="bg-base-100 shadow-2xl border border-red-200   " data-aos="zoom-out-right">
                    <img src={'https://i.ibb.co/D7JRmdK/1.png'} className="w-[100%]" alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title text-2xl">
                            Henry Lucas
                            <div className="badge badge-secondary">6 yr exp</div>
                        </h2>
                        <p className='mt-2'>CEO<br />
                            Social Event Organizer Ltd.</p>
                        <p className='text-xs mt-2'>Get ready to be inspired by Frances B. Chandler, our keynote speaker at Eventchamp. With over 20 years of experience in the events industry.</p>
                       
                    </div>
                </div>
                <div className="bg-base-100 shadow-xl border border-red-200 " data-aos="fade-down" >
                    <img src={'https://i.ibb.co/Vqp49km/e.png'} className="w-[100%]" alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title text-2xl">
                            Lois G. Wynn
                            <div className="badge badge-secondary">8 yr exp</div>
                        </h2>
                        <p className='mt-2'>
                            Event Organizer
                            <br />
                            Social Event Organizer Ltd.</p>
                        <p className='text-xs mt-2'>Get ready to be inspired by Frances B. Chandler, our keynote speaker at Eventchamp. With over 20 years of experience in the events industry.</p>
                        
                    </div>
                </div>
                <div className="bg-base-100 shadow-xl border border-red-200 " data-aos="zoom-out-right">
                    <img src={'https://i.ibb.co/fCJfcHP/3.png'} className="w-[100%]" alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title text-2xl">
                            Daniel Mason
                            <div className="badge badge-secondary">9 yr exp</div>
                        </h2>
                        <p className='mt-2'>
                            Program Organizer
                            <br />
                            Social Event Organizer Ltd.
                        </p>
                        <p className='text-xs mt-2'>Get ready to be inspired by Frances B. Chandler, our keynote speaker at Eventchamp. With over 20 years of experience in the events industry.</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;