import './css/extr.css';

function Account() {
    return (
        <div class="main">
        <h2>PROFILE</h2>
        <div class="card">
            <div class="card-body">
                <i class="fa fa-pen fa-xs edit"></i>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>User's Name</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>user@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>:</td>
                            <td>Philippines</td>
                        </tr>
                        <tr>
                            <td>Hobbies</td>
                            <td>:</td>
                            <td>Writing Diary, Reading Book...</td>
                        </tr>
                        <tr>
                            <td>Bio</td>
                            <td>:</td>
                            <td>Hello I am...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    );
  }
  
export default Account;