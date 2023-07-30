type Props = {
    type?: string
    id: string,
}

export default function Video({ id, type }: Props) {
    const type_computed = type ? type : "youtube"
    const cloudinary_id = process.env.CLOUDINARY_ID
    const url = (type_computed === "cloudinary") ? `https://player.cloudinary.com/embed/?public_id=${id}&cloud_name=${cloudinary_id}` : `https://www.youtube.com/embed/${id}` 
    return (
        <div className="aspect-w-16 aspect-h-9">
            <iframe
                src={url}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </div>
    );
}