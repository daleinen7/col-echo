/* This is the header for OAuth and all other compondents 
That should be displayed universally on the site */

export default function Header(props){
    return(
        <>
        <title>Col-Echo | {props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </>
    )
}