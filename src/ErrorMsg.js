export default function ErrorMsg({ message}){
    if (!message) return null;

    return(
    <div>
        <div>
          <label>{message}</label>
      </div>
    </div>
    );
}