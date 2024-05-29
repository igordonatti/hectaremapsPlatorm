import { TextField } from "@mui/material"

const Payment = () => {
  return (
    <div className="w-screen h-screen bg-gray-300 flex justify-center items-center">
      <div className="bg-white w-1/2 h-1/2 p-6 shadow-lg rounded-lg border border-solid border-green-600">
        <div className="flex justify-between mb-10 mt-10">
          <span className="text-lg font-light">Total</span>
          <div className="text-lg font-light">
            <span>$ 10.25</span> 
            <span className="align-top text-sm">       USD</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-10">
          <TextField label="First name" size="small"/>
          <TextField label="Last name" size="small"/>
          <TextField type="number" label="Card Number" size="small"/>
          <TextField type="number" label="CVV" size="small"/>
          <TextField type="month" size="small"/>
        </div>

        <TextField type="submit"  size="small" fullWidth/>
      </div>
    </div>
  )
}

export default Payment