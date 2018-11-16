
const friend = '905056466328'    // . this is a mobile number
const home = '902322551164'      // this is a land line number
const vox = '16502493791'      // this is a Voximplant purcahsed number 


VoxEngine.addEventListener(AppEvents.CallAlerting, e => {
  call = VoxEngine.callPSTN(friend, vox)
  // call = VoxEngine.callPSTN(home, e.callerid)
  call.addEventListener(CallEvents.Ringing, () => {trace('ringing..')})
  call.addEventListener(CallEvents.Connected, e2 => {
    e.call.answer()
    VoxEngine.sendMediaBetween(e.call, call)
  })

})






