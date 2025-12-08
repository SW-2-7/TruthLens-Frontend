import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import * as styles from './NoticeSection.css';

export default function NoticeCard({
  index,
  title,
  items,
  footer,
}: {
  index: number;
  title: string;
  items: string[];
  footer?: string;
}) {
  return (
    <div className={styles.card}>
      <Text size={1.8} fontWeight="bold" className={styles.cardTitle}>
        {index}. {title}
      </Text>

      <Flex direction="column" width='100%' align='flexStart'>
        {items.map((t, i) => (
          <Flex key={i} direction="row" gap="0.7rem" justify='center'>
            <Text size={1.6} fontWeight='regular'>•</Text>
            <Text size={1.6} fontWeight='regular'>
              {t}
            </Text>
          </Flex>
        ))}
      </Flex>

      {footer && (
        <Text size={1.6} fontWeight='regular'>
          {footer}
        </Text>
      )}
    </div>
  );
}
