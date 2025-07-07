const passport=require('passport');
const GoogleStartegy=require('passport-google-oauth20');

passport.use(
    new GoogleStartegy({ clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_URL_CALLBACK
  },function(accesstoken,refreshToken,profile,done){
    console.log(profile);
    done(null,profile);
    })
)
passport.serializeUser((user,done)=>{
    done(null,user.id);
})
passport.deserializeUser((id,done)=>{
    done(null,id);
})