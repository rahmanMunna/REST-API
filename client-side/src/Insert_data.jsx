const Insert_data = () => {
    const handleAddPhone = (event) => {
        event.preventDefault();
        const form = event.target;
        const phoneName = form.phoneName.value;
        const price = form.price.value;

        const newPhone = { phoneName, price };
        console.log(newPhone);

        // Ensure correct header and send the request
        fetch('http://localhost:5000/phones', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPhone)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);  // Handle the result
                if(result){
                    alert('Inserted Successfully!!');
                }
            })
            .catch(error => {
                console.error('Error:', error);  // Catch errors
            });
    };

    return (
        <div>
            <form onSubmit={handleAddPhone}>
                <input type="text" placeholder="Enter a phone name" name="phoneName" />
                <br />
                <input type="text" placeholder="Enter price" name="price" />
                <br />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default Insert_data;
