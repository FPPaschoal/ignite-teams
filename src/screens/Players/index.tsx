import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { useState } from 'react';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState('time a');
  const [players, setPlayers] = useState(['Felipe']);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['time a', 'time b']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 50 },
          players.length === 0 && { flex: 1 },
        ]}
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={<ListEmpty message="Não há pessoas nesse time" />}
      />
      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}