import React from 'react';




async function Add(handleSubmit) {



    return (
        <section className="section section-shaped section-lg my-0">
            <div className="container pt-lg-md">
                <div className="row justify-content-center">
                    <form className="form-horizontal" onSubmit={handleSubmit} method="post">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                            />
                        </div>
                        <div className="form-group">
                            <select
                                name="status" >
                                <option value="En validation">En validation</option>
                                <option value="Validé">Validé</option>
                                <option value="Rejeté">Rejeté</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="User Name"
                                name="userName"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="date"
                                placeholder="Created Date"
                                name="createdDate"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="number"
                                placeholder="Registration Number"
                                name="registrationNumber"
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mt-4">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Add;