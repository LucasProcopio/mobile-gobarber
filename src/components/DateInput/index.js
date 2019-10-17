import React, { useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpen] = useState(false);
  const dateFormatted = useMemo(() => format(date, 'MMMM do, yyyy'), [date]);

  function handleChange(event, date) {
    setOpen(false);
    if (date !== undefined) {
      onChange(date);
    }
  }

  return (
    <Container>
      <DateButton onPress={() => setOpen(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour
          display="default"
          onChange={handleChange}
          minimumDate={new Date()}
        />
      )}
    </Container>
  );
}
