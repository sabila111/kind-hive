import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../provider/AuthProvider";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Swal from "sweetalert2";

const AddVolunteer = () => {

    const {user} = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date())

    const handleAddVolunteer = e => {


        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const post = form.post.value
        const category = form.category.value
        const location = form.location.value
        const description = form.description.value
        const thumbnail = form.thumbnail.value
        const volunteersNeeded = form.volunteersNeeded.value
        const  deadline= startDate

        const addReview = { name, email, post, category, location, description, thumbnail, volunteersNeeded, deadline }
        console.log(addReview)

        fetch('http://localhost:5000/volunteer', {
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        
        body:JSON.stringify(addReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }

        })
        .catch(error => {
    console.error("catch error:", error);
});
    }

    return (
        <div>
             <Helmet>

<title>KindHive |Add Volunteer Need Post</title>
</Helmet>


<div className="bg-gradient-to-r from-indigo-700 to-cyan-400  p-24">
            <h2 className="text-3xl font-extrabold mb-4 text-center">Add Volunteer Need Post</h2>
            <form onSubmit={handleAddVolunteer}>
                {/* form row 1 */}
                {user? 
                <div className="md:flex mb-6">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input readOnly value={user.displayName || 'No Name'} type="text" name="name" placeholder="name" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        <input readOnly value={user.email} type="email" name="email" placeholder="email" className="input input-bordered w-full" />
                    </label>
                </div>


            </div>
                
                :   <p></p> }
                

                {/* form row 2 */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Post Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="post" placeholder="Post Title" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input list="dropdown-options" id="options" name="category" placeholder="Category" className="input input-bordered w-full" />
                            <datalist id="dropdown-options">
                                <option value="healthcare" />
                                <option value="education" />
                                <option value="social service" />
                                <option value="animal welfare" />
                            </datalist>

                        </label>
                    </div>


                </div>
                {/* form row 3 */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="location" placeholder="Location" className="input input-bordered w-full"/>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="description" className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>

                {/* form row 4 */}

                <div className="md:flex mb-6">
               
                <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Volunteers Needed </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="volunteersNeeded " placeholder="Volunteers Needed " className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4 ">
                        <label className="label">
                            <span className="label-text">Deadline </span>
                        </label>
                        
                        <DatePicker
                className='border p-3 w-full rounded-md'
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
                    </div>


                </div>

                <div className="md:flex mb-6">
               
               <div className="form-control md:w-full ">
                       <label className="label">
                           <span className="label-text">Thumbnail </span>
                       </label>
                       <label className="input-group">
                           <input type="text" name="thumbnail " placeholder="Thumbnail " className="input input-bordered w-full" />
                       </label>
                   </div>


               </div>
                
                <input type="submit" value="Add Post" className="btn btn-block bg-black text-white mt-6 " />
            </form>
        </div>

        </div>
    );
};

export default AddVolunteer;