const BioDetail = (props) => {
    const {bio, name, title, img_url} = props.bioData;
    return ( 
        <div id="bio-detail" >
            <div className="bio-detail_wrapper">
                <img className="bioDetail-image" src={img_url} alt={name} />
                <div className="bio-detail_content">
                    <div className="bio-detail_top">
                        <h3>{name}</h3>
                        <h6>{title}</h6>
                    </div>
                    <div className="bio-detail_bottom">
                        <p>{bio.replace(/(<p>)/, "").replace(/<\/p>/, "")}</p>
                    </div>
                </div>
             </div>   
        </div> );
}
 
export default BioDetail;