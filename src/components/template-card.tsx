import { Avatar, AvatarGroup, Button, Card, CardBody, CardFooter, CardHeader, Heading } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { Gallery } from '../util/constant';
import useTranslatedName from './hooks/use-translated-name';

export const TemplateCard = (props: {
    type: 'fantasy' | 'real_world';
    id: string;
    metadata: Gallery[string];
    handleDetails: (city: string) => void;
}) => {
    const { type, id, metadata, handleDetails } = props;
    const translateName = useTranslatedName();
    const { t } = useTranslation();

    return (
        <Card key={`${type}+${id}`} variant="elevated" minW="300" maxW="340" m="2">
            <CardBody>
                {/* Using native img due to: https://bugzilla.mozilla.org/show_bug.cgi?id=1647077 */}
                <img width="300" height="300" loading="lazy" src={`resources/thumbnails/${id}@300.png`} alt={id} />
            </CardBody>
            <CardHeader>
                <Heading size="lg" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                    {translateName(metadata.name)}
                </Heading>
            </CardHeader>
            <CardFooter>
                <AvatarGroup max={3}>
                    {metadata.contributors.map(contributor => (
                        <Avatar key={contributor} src={`https://avatars.githubusercontent.com/u/${contributor}?s=48`} />
                    ))}
                </AvatarGroup>
                <Button variant="solid" colorScheme="blue" ml="auto" onClick={() => handleDetails(id)}>
                    {t('details.title')}
                </Button>
            </CardFooter>
        </Card>
    );
};
