
const EBusinessCard = ({ imageUrl, title }) => {
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                </div>
            </div>

        </div>
    );
};

export default EBusinessCard;