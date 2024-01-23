/* eslint-disable react/prop-types */

const EBusinessCard = ({ imageUrl, title }) => {
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                <img src={imageUrl} alt={title} className="w-60 h-48 bg-white object-cover" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                </div>
            </div>

        </div>
    );
};

export default EBusinessCard;