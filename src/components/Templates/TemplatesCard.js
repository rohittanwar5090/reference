import { Card, CardMedia } from '@material-ui/core'
import React from 'react'

function TemplatesCard({ src }) {
    return (
        <Card className='mx-1 cursor-pointer'>
            <CardMedia
                component="img"
                style={{ height: 'auto', width: '100%', objectFit: 'cover' }}
                image={src}
                alt=""
            />
        </Card>

    )
}

export default TemplatesCard
