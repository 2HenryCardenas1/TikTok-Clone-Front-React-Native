import { map } from 'lodash'
import React from 'react'
import { RefreshControl, ScrollView } from 'react-native'
import { ENV } from '../../../utils'
import { CommentNotifications } from '../CommentNotifications'
import { FollowNotification } from '../FollowNotification'
import { LikeNotification } from '../LikeNotification'
import { ShareNotification } from '../ShareNotification'
export function ListNotifications(props) {
    const { notifications, refreshing, onRefresh, readNotification } = props

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            {map(notifications, (notification, index) => {
                if (notification.type_notification === ENV.TYPE_NOTIFICATION.COMMENT) {
                    return (
                        <CommentNotifications
                            key={index}
                            notification={notification}
                            readNotification={readNotification}

                        />
                    )
                }
                if (notification.type_notification === ENV.TYPE_NOTIFICATION.FOLLOW) {
                    return (
                        <FollowNotification key={index}
                            notification={notification}
                            readNotification={readNotification}
                        />
                    )
                }
                if (notification.type_notification === ENV.TYPE_NOTIFICATION.LIKE) {
                    return (
                        <LikeNotification key={index}
                            notification={notification}
                            readNotification={readNotification}
                        />
                    )
                }
                if (notification.type_notification === ENV.TYPE_NOTIFICATION.SHARE) {
                    return (
                        <ShareNotification key={index}
                            notification={notification}
                            readNotification={readNotification}
                        />
                    )
                }
                return null
            })}
        </ScrollView>
    )
}